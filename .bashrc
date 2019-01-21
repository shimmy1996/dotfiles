#!/usr/bin/env bash

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Alias
alias ls='ls --color=auto'
alias ll='ls -l'
alias la='ll -a'

# Prompt
PS1='\n\[$(tput setaf 6)\][\t] \[$(tput setaf 7)\]\u@\h: \[$(tput setaf 4)\]\w\n\[$(tput setaf 4)\]\[$(tput bold)\]\$\[$(tput sgr0)\] '
