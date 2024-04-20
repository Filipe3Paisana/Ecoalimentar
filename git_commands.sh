#!/bin/bash

# git_comands.sh
# Uso1 : ./git_commands.sh nome-branch " Mensagem de commit" 
# Se a branch e a mensagem de commit forem fornecidas, o Bloco A e o Bloco B serão executados.
# Uso2 : ./git_commands.sh nome-branch
# Se apenas a branch for fornecida, o Bloco B será executado.

BRANCH_NAME=$1
COMMIT_MESSAGE=$2

if [[ -z "$BRANCH_NAME" ]]|| []; then
    echo "Por favor, forneça o nome da branch."
    exit 1
fi

if [[ "$BRANCH_NAME" != "Paisana" ]] && [[ "$BRANCH_NAME" != "Manuel" ]]; then
    echo "Erro: O nome da branch deve ser 'Paisana' ou 'Manuel'."
    exit 1
fi

if [[ -n "$BRANCH_NAME" ]] && [[ -n "$COMMIT_MESSAGE" ]]; then
    # Executa Bloco A
    git add .
    git commit -m "$COMMIT_MESSAGE"
    git checkout main
    git pull origin main
    git checkout "$BRANCH_NAME"
    git rebase main
    git push origin "$BRANCH_NAME":main
fi

# Executa Bloco B (sempre executado se BRANCH_NAME estiver definido)
if [[ -n "$BRANCH_NAME" ]]; then
    git checkout main
    git pull origin main
    git checkout "$BRANCH_NAME"
    git merge main
    git push origin "$BRANCH_NAME"
fi
