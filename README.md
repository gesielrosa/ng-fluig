# [ng-fluig] Schematics Fluig para Angular

Este repositório tem como objetivo prover schematics que facilitam o desenvolvimento de aplicações Angular na plataforma
TOTVS Fluig.

## Instalação

A instalação pode ser feita via NPM:

```bash
npm install -D ng-fluig
```

## Gerar um Widget

Para gerar um widget basta executar o comando abaixo no seu projeto Angular:

```bash
ng g ng-fluig:widget
```

### Opções disponíveis

| Propriedade     | Obrigatório | Descrição                                                             | Valor padrão                | Exemplo                                          |
|-----------------|-------------|-----------------------------------------------------------------------|-----------------------------|--------------------------------------------------|
| name            | Sim         | O nome do widget.                                                     |                             | `--name="Meu Super Projeto"`                     |
| description     | Não         | A descrição do widget. `(opcional)`                                   | O nome do widget            | `--description="Um super projeto Angular"`       |
| project         | Não         | O nome do projeto Angular que será associado ao widget. `(opcional)`  | Projeto padrão do workspace | `--project=app-super-projeto`                    |
| path            | Não         | O caminho onde será gerado o widget. `(opcional)`                     | `fluig/widget`              | `--path=libs/widget`                             |
| root-selector   | Não         | O seletor (tag html) do componente raiz. `(opcional)`                 | `app-root`                  | `--root-selector=app-raiz`                       |
| install-command | Não         | Comando de instalação das dependências (NPM) do projeto. `(opcional)` | `install`                   | `--install-command="install --legacy-peer-deps"` |

## Contribuidores

| Nome        |                                         |                                                     |
|-------------|-----------------------------------------|-----------------------------------------------------|
| Gesiel Rosa | [GitHub](https://github.com/gesielrosa) | [LinkedIn](https://www.linkedin.com/in/gesielrosa/) |

## Contribuindo

Fique a vontade para criar pull requests!
