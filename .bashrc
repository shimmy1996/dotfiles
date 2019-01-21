#!/usr/bin/env bash

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Alias
alias ls='ls --color=auto'
alias ll='ls -l'
alias la='ll -a'

# Prompt
PS1='\[$(tput setaf 8)\][\t] \[$(tput setaf 15)\]\u@\h: \[$(tput setaf 4)\]\w \n\[$(tput setaf 2)\]\$\[$(tput sgr0)\] '
