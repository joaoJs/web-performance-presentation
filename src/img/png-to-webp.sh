#!/bin/sh
for f in *.png ; do
        basename "$f"
        original="$(basename -- $f)"
        new="${original/png/webp}"
        cwebp $original -o webp/$new ;
        done
