#!/usr/bin/env bash

# Keyboard settings.
if [[ `hostname` == "bluebear" ]]; then
    export XKB_DEFAULT_OPTIONS=ctrl:swapcaps
fi

# Add `~/.local/bin/` to path.
export PATH=$HOME/.local/bin:$PATH

# Go settings.
export GOPATH=$HOME/.go
export PATH=$GOPATH/bin:$PATH

# Nim executables
export PATH=$HOME/.nimble/bin:$PATH

# Rust executables
export PATH=$HOME/.cargo/bin:$PATH

# Fcitx fixes
export XMODIFIERS=@im=fcitx
export QT_IM_MODULE=fcitx
export GTK_IM_MODULE=fcitx

# Preferred applications
export TERMINAL="alacritty"
export BROWSER="firefox"
export EDITOR="emacsclient"
export VISUAL="emacsclient"

# fzf color scheme.
_gen_fzf_default_opts() {
    local color00='#262626'
    local color01='#3a3a3a'
    local color02='#4e4e4e'
    local color03='#8a8a8a'
    local color04='#949494'
    local color05='#dab997'
    local color06='#d5c4a1'
    local color07='#ebdbb2'
    local color08='#d75f5f'
    local color09='#ff8700'
    local color0A='#ffaf00'
    local color0B='#afaf00'
    local color0C='#85ad85'
    local color0D='#83adad'
    local color0E='#d485ad'
    local color0F='#d65d0e'

    export FZF_DEFAULT_OPTS="
  --color=bg+:$color01,bg:$color00,spinner:$color0C,hl:$color0D
  --color=fg:$color04,header:$color0D,info:$color0A,pointer:$color0C
  --color=marker:$color0C,fg+:$color06,prompt:$color0A,hl+:$color0D
--height=40%
"
}

_gen_fzf_default_opts

# Auto start tbsm after login on first two VTs.
[[ $XDG_VTNR -le 2 ]] && tbsm
