# 🚀 Sistema de Release Automático

O projeto ciot-ts agora possui um sistema completo de release automático usando GitHub Actions.

## 📋 Como Funciona

Quando você faz merge de código para a branch `main`, o sistema automaticamente:

1. ✅ Verifica a versão atual no `package.json`
2. 🏷️ Cria uma nova tag Git (ex: `v0.4.1`)
3. 🔨 Compila o projeto TypeScript
4. 📦 Gera o pacote npm
5. 📝 Cria changelog automático
6. 🎉 Publica release no GitHub

## 🛠️ Passo a Passo para Criar um Release

### 1. Atualize a Versão

```bash
# Para correções de bugs (0.4.0 → 0.4.1)
npm version patch

# Para novas funcionalidades (0.4.0 → 0.5.0)
npm version minor

# Para mudanças que quebram compatibilidade (0.4.0 → 1.0.0)
npm version major
```

### 2. Faça o Merge para Main

```bash
git add package.json
git commit -m "chore: bump version to X.X.X"
git push origin feat/sua-branch

# Depois faça merge via Pull Request ou diretamente:
git checkout main
git merge feat/sua-branch
git push origin main
```

### 3. Aguarde o Release Automático

- O GitHub Actions será executado automaticamente
- Você pode acompanhar o progresso na aba "Actions"
- Em poucos minutos terá um novo release disponível

## 🎯 Exemplo Prático

Imagine que você acabou de implementar uma nova funcionalidade:

```bash
# 1. Sua branch está pronta
git checkout feat/nova-funcionalidade

# 2. Atualize a versão (nova funcionalidade = minor)
npm version minor
# Isso mudará package.json de "0.4.0" para "0.5.0"

# 3. Commit da versão
git add package.json
git commit -m "chore: bump version to 0.5.0"
git push origin feat/nova-funcionalidade

# 4. Merge para main (via PR ou direto)
git checkout main
git merge feat/nova-funcionalidade
git push origin main

# 5. 🎉 Em alguns minutos você terá:
# - Tag "v0.5.0" no GitHub
# - Release "ciot-ts v0.5.0" 
# - Changelog automático
# - Arquivos compilados anexados
```

## 📝 O que vai no Changelog

O sistema gera automaticamente um changelog baseado nos commits:

```markdown
# Release Notes for v0.5.0

## 📋 Changes since v0.4.0

- feat: adiciona nova funcionalidade X (abc1234)
- fix: corrige bug na validação (def5678)
- docs: atualiza documentação (ghi9012)

## 📦 Package Information
- Version: 0.5.0
- Build Date: 2025-10-14 15:30:00 UTC
- Commit: abc123def456...
```

## 🔧 Execução Manual

Você também pode criar releases manualmente:

1. Vá para [GitHub Actions](https://github.com/ciot-platform/ciot_ts/actions)
2. Selecione "Auto Release"
3. Clique "Run workflow"
4. Opcionalmente especifique uma versão diferente

## 🚨 Possíveis Erros e Soluções

### ❌ "Tag already exists"
**Problema:** A versão no package.json já foi lançada
**Solução:** Atualize a versão com `npm version patch/minor/major`

### ❌ Build falha
**Problema:** Erro na compilação TypeScript
**Solução:** Execute `npm run build` localmente e corrija os erros

### ❌ Sem permissão para criar release
**Problema:** Token do GitHub sem permissões
**Solução:** Normalmente resolve sozinho, é configuração automática

## 📁 Arquivos Criados

O sistema criou os seguintes arquivos:

```
.github/
└── workflows/
    ├── auto-release.yml    # 🎯 Workflow de release automático
    └── README.md          # 📖 Documentação do workflow
```

## 🎮 Testando o Sistema

Para testar se tudo funciona:

```bash
# 1. Faça uma pequena mudança
echo "// Test change" >> src/index.ts

# 2. Atualize versão
npm version patch

# 3. Commit e push para main
git add .
git commit -m "test: verificar sistema de release"
git push origin main

# 4. Verifique na aba Actions do GitHub
```

## 🔄 Workflow Recomendado no Dia a Dia

1. **Trabalhe em branches** - sempre crie branches para features/fixes
2. **Use commits semânticos** - `feat:`, `fix:`, `docs:`, etc.
3. **Teste localmente** - execute `npm run build` antes do merge
4. **Atualize versão** - use `npm version` antes do merge para main
5. **Merge para main** - o release acontece automaticamente

Com esse sistema, você nunca mais precisa se preocupar em criar releases manualmente! 🎉
