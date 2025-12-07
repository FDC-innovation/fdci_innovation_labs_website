#!/bin/bash

# Script to copy team images from digital-leaders to public/team

SOURCE="/Users/adityakumartonk/Desktop/assets/digital-leaders"
DEST="public/team"

echo "Setting up team images..."
echo "Source: $SOURCE"
echo "Destination: $DEST"
echo ""

# Create destination directory
mkdir -p "$DEST"

# Check if source exists
if [ ! -d "$SOURCE" ]; then
    echo "❌ Error: Source directory not found: $SOURCE"
    echo "Please update the SOURCE path in this script"
    exit 1
fi

# Copy all image files
echo "Copying images..."
count=0

# Copy with exact filenames
for file in "$SOURCE"/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        cp "$file" "$DEST/$filename"
        echo "  ✓ $filename"
        ((count++))
    fi
done

# Also try to copy with lowercase names for common files
if [ -f "$SOURCE/sunil-butola.jpg" ] || [ -f "$SOURCE/SunilButola.jpg" ] || [ -f "$SOURCE/sunil.jpg" ]; then
    if [ -f "$SOURCE/sunil-butola.jpg" ]; then
        cp "$SOURCE/sunil-butola.jpg" "$DEST/sunil-butola.jpg" 2>/dev/null
    elif [ -f "$SOURCE/SunilButola.jpg" ]; then
        cp "$SOURCE/SunilButola.jpg" "$DEST/sunil-butola.jpg" 2>/dev/null
    elif [ -f "$SOURCE/sunil.jpg" ]; then
        cp "$SOURCE/sunil.jpg" "$DEST/sunil-butola.jpg" 2>/dev/null
    fi
    echo "  ✓ sunil-butola.jpg"
fi

if [ -f "$SOURCE/mujeeb.jpg" ] || [ -f "$SOURCE/Mujeeb.jpg" ] || [ -f "$SOURCE/mujeeb-accounting.jpg" ]; then
    if [ -f "$SOURCE/mujeeb.jpg" ]; then
        cp "$SOURCE/mujeeb.jpg" "$DEST/mujeeb.jpg" 2>/dev/null
    elif [ -f "$SOURCE/Mujeeb.jpg" ]; then
        cp "$SOURCE/Mujeeb.jpg" "$DEST/mujeeb.jpg" 2>/dev/null
    elif [ -f "$SOURCE/mujeeb-accounting.jpg" ]; then
        cp "$SOURCE/mujeeb-accounting.jpg" "$DEST/mujeeb.jpg" 2>/dev/null
    fi
    echo "  ✓ mujeeb.jpg"
fi

echo ""
echo "✅ Copied $count image(s)"
echo ""
echo "Files in $DEST:"
ls -lh "$DEST" | tail -n +2 | awk '{print "  - " $9 " (" $5 ")"}'

