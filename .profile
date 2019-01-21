#!/usr/bin/env bash

# Keyboard settings.
if [[ `hostname` == "bluebear" ]]; then
    export XKB_DEFAULT_OPTIONS=ctrl:swapcaps
fi

# Add `~/.local/bin/` to path.
export PATH="$PATH:$(echo "$HOME/.local/bin/" | cut -f2 | tr '\n' ':')"

# Fcitx fixes
export XMODIFIERS=@im=fcitx
export QT_IM_MODULE=fcitx
export GTK_IM_MODULE=fcitx

# Preferred applications
if [[ `hostname` == "bluebear" ]]; then
    # Wayland fix.
    export TERMINAL=env WINIT_HIDPI_FACTOR=1.0 WAYLAND_DISPLAY= alacritty
else
    export TERMINAL=alacritty
fi
export BROWSER="firefox"
export EDITOR="emacsclient"
export VISUAL="emacsclient"

# Auto start tbsm after login on first two VTs.
[[ $XDG_VTNR -le 2 ]] && tbsm
