# Keyboard settings.
export XKB_DEFAULT_OPTIONS=ctrl:swapcaps

# Auto start tbsm after login on first two VTs.
[[ $XDG_VTNR -le 2 ]] && tbsm
