import {
    apply,
    chain,
    MergeStrategy,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    SchematicsException,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';
import {getWorkspace} from "@schematics/angular/utility/workspace";
import {join, normalize, strings} from "@angular-devkit/core";

export async function setupProjectPath(host: Tree, options: any): Promise<Tree> {
    const workspace = await getWorkspace(host);
    if (!options.project) {
        options.project = workspace.projects.keys().next().value;
    }
    const project = workspace.projects.get(options.project);
    if (!project) {
        throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    options.projectPath = join(normalize(project.root), 'src');
    return host;
}

export function generateWidget(_options: any): Rule {
    return async (_tree: Tree, _context: SchematicContext) => {
        await setupProjectPath(_tree, _options);

        _options.path = normalize(_options.path || 'fluig/widget');
        _options.code = strings.underscore(_options.name);
        _options.buildCommand = `run build -- --project=${_options.project} --output-path="${_options.path ? _options.path + '/' : ''}${_options.code}/src/main/webapp/resources" --deploy-url="/${_options.code}/resources/"`;
        _options.installCommand = _options.installCommand || 'install';
        _options.nodeVersion = `v${process.versions.node}`;
        _options.workingDirectory = new Array((_options.path?.split('/').filter(Boolean).length || 0) + 1).fill('../').join('');
        _options.description = _options.description || `${_options.name} Widget`;
        _options.rootSelector = _options.rootSelector || 'app-root';
        _options.gitignore = '.gitignore';

        const fluigMovePath = normalize(_options.path + '/');
        const fluigTemplateSource = apply(url('./files/fluig'), [
            template({..._options}),
            move(normalize(fluigMovePath))
        ]);

        const angularMovePath = normalize(_options.projectPath + '/');
        const angularTemplateSource = apply(url('./files/angular'), [
            template({..._options}),
            move(join(normalize(angularMovePath), 'app'))
        ]);

        return chain([
            mergeWith(fluigTemplateSource, MergeStrategy.Overwrite),
            mergeWith(angularTemplateSource, MergeStrategy.Overwrite)
        ]);
    };
}
