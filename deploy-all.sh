#!/bin/bash

# --- Argument Parsing ---
# Check if a target version was provided
if [ -z "$1" ]; then
    echo "ERROR: No target version specified."
    echo "Usage: ./deploy-all.sh <target> [--dry-run]"
    echo "Example: ./deploy-all.sh ngx17"
    echo "Example: ./deploy-all.sh ngx17 --dry-run"
    exit 1
fi

TARGET=$1
DRY_RUN=false

# Check for the optional --dry-run flag
if [ "$2" == "--dry-run" ]; then
    DRY_RUN=true
    echo "DRY RUN MODE: Will skip copy and push commands."
fi


# --- Library List ---
LIBRARIES=(
    "ngx-input-validators"
    "ngx-form-common"
    "ngx-email-composer"
)

# --- Main Loop ---
for lib in "${LIBRARIES[@]}"
do
    echo "================================================="
    echo "Processing: $lib for target: $TARGET"
    echo "================================================="

    # Conditionally execute the deployment commands
    if [ "$DRY_RUN" = true ]; then
        # Dry Run: Only prepare and build
        make prepare-$TARGET Project=$lib && make build Project=$lib
    else
        # Full Run: Prepare, build, copy, and push
        make prepare-$TARGET Project=$lib && \
        make build Project=$lib && \
        make copy Project=$lib && \
        make push Project=$lib
    fi

    # Check if the commands were successful
    if [ $? -ne 0 ]; then
        echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        echo "ERROR: A step failed for $lib"
        echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        exit 1 # Exit the script if any command fails
    fi

    echo "Successfully processed: $lib"
    echo ""
done

echo "================================================="
echo "All libraries processed successfully."
echo "================================================="
