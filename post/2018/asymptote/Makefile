TOP    := .
SRC    := $(TOP)/src
BUILD  := $(TOP)/build
COMMON := $(TOP)/common

PICS    := $(shell find $(SRC) -type f -iname "*.asy" )
PICPDFS := $(shell echo $(PICS) |sed 's|.asy|.pdf|g' |sed 's|$(SRC)|$(BUILD)|g' )
PICPNGS := $(shell echo $(PICS) |sed 's|.asy|.png|g' |sed 's|$(SRC)|$(BUILD)|g' )

# location of custom asymptote libraries
export ASYMPTOTE_HOME=$(COMMON)
# important for pdftex settings of asymptote compilation
# otherwise we get an error:
# warning: kpathsea: \setbox\ASYbox=\hbox{$b_\alpha$}: Unrecognized variable construct `$}'.
export TEXINPUTS=.//:

# main goal which builds all pdf pictures
pictures: $(PICPDFS) $(PICPNGS)

$(BUILD):
	mkdir -p $@

$(BUILD)/%.pdf: $(SRC)/%.asy $(COMMON)/*.asy
	asy -f pdf -tex pdftex "$<" -o "$@"

$(BUILD)/%.png: $(SRC)/%.asy $(COMMON)/*.asy
	asy -f png -tex pdftex "$<" -o "$@"

clean:
	rm -rf $(BUILD)

