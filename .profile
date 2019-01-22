#!/usr/bin/env bash

# Keyboard settings.
if [[ `hostname` == "bluebear" ]]; then
    export XKB_DEFAULT_OPTIONS=ctrl:swapcaps
fi

# Add `~/.local/bin/` to path.
export PATH=$HOME/.local/bin/:$PATH

# Fcitx fixes
export XMODIFIERS=@im=fcitx
export QT_IM_MODULE=fcitx
export GTK_IM_MODULE=fcitx

# Preferred applications
export TERMINAL="alacritty"
export BROWSER="firefox"
export EDITOR="emacsclient"
export VISUAL="emacsclient"

# Auto start tbsm after login on first two VTs.
[[ $XDG_VTNR -le 2 ]] && tbsm
