#!/usr/bin/env bash

if [ $# -ne 2 ]; then
    echo "usage: $0 <image> <part>"
    exit 1
fi

image="$1"
part="$2"
name="img2/$image"_"$part.jpg"
tmp="tmp.jpg"

flameshot gui -p "$tmp"
convert "$tmp" -resize x200 "$name"
rm "$tmp"
