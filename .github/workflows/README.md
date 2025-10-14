# GitHub Actions Workflow

Este diretório contém o workflow do GitHub Actions para automatizar o processo de release do projeto ciot-ts.

## Workflow

### `auto-release.yml`
O único workflow necessário para criar releases automáticos.

**Quando executa:**
- Push para branch `main`
- Execução manual via GitHub UI

**O que faz:**
- Lê a versão do `package.json`
- Verifica se a tag já existe
- Compila o projeto (TypeScript)
- Executa testes (se existirem)
- Cria pacote npm
- Gera changelog automático
- Cria release no GitHub com arquivos anexados

## Como Usar

### Para criar um novo release:

1. **Atualize a versão no package.json:**
   ```bash
   npm version patch  # para correções (0.4.0 → 0.4.1)
   npm version minor  # para novas funcionalidades (0.4.0 → 0.5.0)
   npm version major  # para mudanças breaking (0.4.0 → 1.0.0)
   ```

2. **Faça merge para main:**
   ```bash
   git push origin main
   ```

3. **O workflow será executado automaticamente** e criará:
   - Uma tag Git com a versão (ex: `v0.4.1`)
   - Um release no GitHub
   - Changelog automático
   - Anexará arquivos de build

### Execução Manual

Você também pode executar manualmente:
1. Vá para a aba "Actions" no GitHub
2. Selecione "Auto Release"
3. Clique em "Run workflow"
4. Opcionalmente especifique uma versão customizada

## Configuração Necessária

O workflow usa `GITHUB_TOKEN` que é automaticamente fornecido pelo GitHub Actions. Nenhuma configuração adicional é necessária.

## Arquivos Incluídos no Release

- `ciot-ts-*.tgz` - Pacote npm
- `dist/**` - Arquivos compilados (se existirem)
- Changelog automático baseado em commits

## Troubleshooting

### Erro: "Tag already exists"
- A versão no `package.json` já foi lançada
- Atualize a versão antes de fazer merge para main

### Build falha
- Verifique se todas as dependências estão no `package.json`
- O workflow tenta executar `npm run build` se o script existir

### Sem arquivos de build
- Normal se o projeto não tem script de build
- O workflow continuará e anexará apenas o pacote npm
