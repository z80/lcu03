#!/bin/sh
PATH=$PATH:~/programs/code-sourcery/2011.03-42/bin
ddd --eval-command "target remote :4242" --debugger arm-none-eabi-gdb ./build/miling.main.elf
