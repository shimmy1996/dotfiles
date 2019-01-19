# # Keyboard settings.
# export XKB_DEFAULT_OPTIONS=ctrl:swapcaps

# Adds `~/.scripts` and all subdirectories to $PATH
export PATH="$PATH:$(du "$HOME/.scripts/" | cut -f2 | tr '\n' ':')"

# Fcitx fixes
export XMODIFIERS=@im=fcitx
export QT_IM_MODULE=fcitx
export GTK_IM_MODULE=fcitx

# # Auto start tbsm after login on first two VTs.
# [[ $XDG_VTNR -le 2 ]] && tbsm
