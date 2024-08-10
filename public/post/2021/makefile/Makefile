# ================================================================================
#
# January 2021   Václav Blažej <vaclavblazej@seznam.cz>
#
# This is free and unencumbered software released into the public domain.
#
# Anyone is free to copy, modify, publish, use, compile, sell, or
# distribute this software, either in source code form or as a compiled
# binary, for any purpose, commercial or non-commercial, and by any
# means.
#
# In jurisdictions that recognize copyright laws, the author or authors
# of this software dedicate any and all copyright interest in the
# software to the public domain. We make this dedication for the benefit
# of the public at large and to the detriment of our heirs and
# successors. We intend this dedication to be an overt act of
# relinquishment in perpetuity of all present and future rights to this
# software under copyright law.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.
#
# For more information, please refer to <http://unlicense.org/>
#
# ================================================================================

MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --no-builtin-variables

CC           = g++
LOADLIBES    = -lm
CXXFLAGS     = --std=c++17 -Wall -pedantic -g -O5 -ffast-math
DEPFLAGS     = -MT $@ -MMD -MP -MF ./build/$*.d

MAIN_FILES   = $(shell grep -lr 'int main' './src/' | grep 'cpp$$')
OTHER_FILES  = $(shell grep -Lr 'int main' './src/' | grep 'cpp$$')

SOURCE_FILES = $(OTHER_FILES) $(MAIN_FILES)
EXE_FILES    = $(MAIN_FILES:./src/%.cpp=./exe/%)
OBJECT_FILES = $(OTHER_FILES:./src/%.cpp=./build/%.o)
HEADER_FILES = $(OTHER_FILES:.cpp=.hpp)
DEPENDENCIES = $(SOURCE_FILES:./src/%.cpp=./build/%.d)

compile: $(EXE_FILES)

./build/%.o: ./src/%.cpp ./build/%.d
	@mkdir -p `dirname $@`
	$(CC) $(CXXFLAGS) $(DEPFLAGS) -c -o $@ $<

$(EXE_FILES): ./exe/%: ./src/%.cpp $(OBJECT_FILES)
	@mkdir -p `dirname $@`
	$(CC) $(CXXFLAGS) -o $@ $< $(OBJECT_FILES)

.PHONY: clean
clean:
	@echo "don't change this rule, as it may be dangerous if small bugs are introduced"
	rm -rf build/ exe/

$(DEPENDENCIES):
include $(wildcard $(DEPENDENCIES))
