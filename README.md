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

| Propriedade | Obrigatório | Descrição                                                            | Exemplo                       |
|-------------|-------------|----------------------------------------------------------------------|-------------------------------|
| name        | Sim         | O nome do Widget a ser criado.                                       | `--name="Meu Super Projeto"`  |
| project     | Não         | O nome do projeto Angular que será associado ao widget. `(opcional)` | `--project=app-super-projeto` |
| path        | Não         | O caminho onde será gerada a estrutura do Fluig. `(opcional)`        | `--path=libs`                 |

## Contribuidores

| Nome        |                                         |                                                     |
|-------------|-----------------------------------------|-----------------------------------------------------|
| Gesiel Rosa | [GitHub](https://github.com/gesielrosa) | [LinkedIn](https://www.linkedin.com/in/gesielrosa/) |

## Contribuindo

Fique a vontade para criar pull requests!
