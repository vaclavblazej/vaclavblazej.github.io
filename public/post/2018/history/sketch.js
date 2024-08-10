function grid(sketch, square, height, start, to){
    var sy=1;
    sketch.strokeWeight(4);
    sketch.stroke(140);
    sketch.textAlign(RIGHT);
    sketch.strokeWeight(1);
    for(var i=1; square*i<height; ++i){
        sketch.line(0,square*i,sketch.width,square*i);
    }
    sketch.textSize(9);
    sketch.textAlign(CENTER);
    for(var i=0; square*i<sketch.width; ++i){
        if(i%12==0){
            sketch.stroke(0);
            sketch.strokeWeight(4);
        }else{
            sketch.stroke(140);
            sketch.strokeWeight(1);
        }
        sketch.line(square*i,sy*square,square*i,height);
        if(i%12==0){
            sketch.noStroke();
            sketch.fill(0);
            sketch.text(start.getYear()+i/12+1900, square*i, square*sy-2);
        }
    }
    sketch.stroke(0);
    sketch.strokeWeight(4);
    sketch.line(sketch.width-2,sy*square,sketch.width-2,height);
    sketch.noFill();
    sketch.strokeWeight(1);
    sketch.text("-", sketch.width-square, square*sy-2);
}

class Segment{
    constructor(f,t,c){
        this.f=f;
        this.t=t;
        this.c=c;
    }
}
class Line{
    constructor(name,line,c,f,t){
        this.name = name; // String
        this.line = line; // where to draw the box
        this.c=c;
        this.f=f;
        this.t=t;
    }
}

function val(d, start){
    var diff=new Date(d-start);
    var dm=d.getMonth() - start.getMonth();
    var dy=d.getYear() - start.getYear();
    if(dm<0){ dy++; }
    var res=dy*12 + dm;
    return res;
}

function create_graph(sketch, lines, square, start, end){
    var w = val(end, start);
    var max_lines = 0;
    for(var i=0; i<lines.length; ++i){
        max_lines = max(max_lines, lines[i].line)
    }
    var height = square*(2+max_lines)+1;
    var canvas = sketch.createCanvas(square*(w+1)+1, height);

    sketch.background(0,0,0,0);
    sketch.stroke(140);
    sketch.strokeWeight(1);
    for(var i=0; i<lines.length; ++i){
        var line=lines[i].line;
        sketch.fill(lines[i].c);
        var from=val(lines[i].f, start);
        var to=val(lines[i].t, start);
        var idx=line+1;
        sketch.stroke(0);
        sketch.noStroke();
        sketch.rect(from*square,idx*square,(to-from+1)*square,square);
    }
    grid(sketch, square, height, start, end);
    sketch.textSize(10);
    for(var i=0; i<lines.length; ++i){
        var line=lines[i].line;
        var name=lines[i].name;
        var from=val(lines[i].f, start);
        var to=val(lines[i].t, start);
        var idx=line+1;
        sketch.fill(0);
        sketch.textAlign(RIGHT);
        sketch.text(name, from*square-square/3, (idx+1)*square-1);
    }
}

function vyvoj(sketch) {
    var main_color=color(100,100,255,100);
    var help_color=color(100,100,100,100);
    var end=new Date(2020,06)
    lines = []
    lines.push(new Line("Aleš F.",0,main_color,new Date(2013,05),new Date(2015,06)));
    lines.push(new Line("Vojta S.",1,main_color,new Date(2013,09),new Date(2014,05)));
    lines.push(new Line("Zdeněk",2,main_color,new Date(2013,11),new Date(2017,10)));
    lines.push(new Line("Vašek",3,main_color,new Date(2014,02),new Date(2019,07)));
    lines.push(new Line("Eliška",4,help_color,new Date(2014,07),end));
    lines.push(new Line("Štěpán",5,main_color,new Date(2014,07),end));
    lines.push(new Line("Martin",6,main_color,new Date(2014,11),new Date(2017,11)));
    lines.push(new Line("David P.",7,main_color,new Date(2014,02),new Date(2014,06)));
    lines.push(new Line("Ondra",8,help_color,new Date(2014,07),new Date(2014,07)));
    lines.push(new Line("David K.",9,help_color,new Date(2015,03),new Date(2015,04)));
    lines.push(new Line("Ivo S.",8,help_color,new Date(2015,09),new Date(2016,09)));
    lines.push(new Line("Tomáš M.",9,help_color,new Date(2017,02),new Date(2017,07)));
    lines.push(new Line("Tung",7,main_color,new Date(2018,01),end));
    lines.push(new Line("Tomáš",8,main_color,new Date(2018,03),new Date(2019,07)));
    lines.push(new Line("Adam",9,main_color,new Date(2018,03),end));
    create_graph(sketch, lines, 10, new Date(2013,01), end);
}

function fiks(sketch) {
    var main_color=color(255,100,100,100);
    var help_color=color(100,100,100,100);
    var lines = [];
    var now = new Date()
    var IDK = new Date(2013, 06)
    var asi_now = new Date()
    var original_start = new Date(2014,09)
    lines.push(new Line("Tomáš", 0, main_color, original_start, now));
    lines.push(new Line("Ondra", 1, main_color, original_start, now));
    lines.push(new Line("Roman Jelínek", 2, main_color, original_start, new Date(2018,03)));
    lines.push(new Line("Jakub Puchýř", 3, main_color, original_start, new Date(2018,03)));
    lines.push(new Line("Pepa Malík", 4, main_color, IDK, new Date(2020,04)));
    lines.push(new Line("Ondra Šofr", 5, main_color, new Date(2016,03), new Date(2020,04))); // from z oprav
    lines.push(new Line("David", 6, main_color, new Date(2015,01), new Date(2018,02))); // from z oprav
    lines.push(new Line("Jura", 7, main_color, new Date(2015,01), new Date(2016,04))); // from a to z oprav
    lines.push(new Line("Jan Baier", 8, main_color, IDK, new Date(2017,04)));
    lines.push(new Line("Ján Sebechlebský", 9, main_color, new Date(2015,04), new Date(2015,04))); // from a to z oprav
    lines.push(new Line("Vašek", 10, main_color, new Date(2015,04), now)); // from z oprav
    lines.push(new Line("Šimon", 11, main_color, new Date(2015,02), now)); // from z oprav
    lines.push(new Line("Anežka", 12, main_color, new Date(2017,02), asi_now)); // možné to: new Date(2019,03), from z oprav
    lines.push(new Line("Vanda", 13, main_color, new Date(2017,04), now)); // from z oprav
    lines.push(new Line("Klára", 14, main_color, new Date(2015,12), new Date(2019,02))); // from a to z oprav
    lines.push(new Line("Morass", 15, main_color, new Date(2015,12), new Date(2020,10))); // from z oprav
    lines.push(new Line("Vojta N.", 16, main_color, IDK, IDK)); // new Date(2020,04)
    lines.push(new Line("Martin Kučera", 17, main_color, IDK, now));
    lines.push(new Line("Tomáš Dejmek", 18, main_color, new Date(2016,04), new Date(2017,04))); // from a to z oprav
    lines.push(new Line("Miroslav Kravec", 19, main_color, new Date(2015,09), new Date(2016,01))); // from a to z oprav
    lines.push(new Line("Jan P.", 20, main_color, IDK, new Date(2019,08)));
    lines.push(new Line("Andy", 21, main_color, IDK, now));
    lines.push(new Line("Peter", 22, main_color, new Date(2017,01), new Date(2019,04))); // from z oprav
    lines.push(new Line("Tomáš Krupička", 23, main_color, IDK, now));
    lines.push(new Line("Radek Jizba", 24, main_color, new Date(2020,01), now)); // from z oprav
    lines.push(new Line("Radovan Červený", 25, main_color, new Date(2017,09), new Date(2017,12))); // from z oprav
    lines.push(new Line("David Horský", 26, main_color, new Date(2019,10), now)); // from z oprav
    lines.push(new Line("Tung", 27, main_color, new Date(2018,01), now)); // from z oprav
    lines.push(new Line("Anna Sajdoková", 28, main_color, new Date(2019,09), now)); // from z oprav
    lines.push(new Line("David Mašek", 29, main_color, IDK, now));
    lines.push(new Line("Dušan", 30, main_color, new Date(2020,07), now));
    lines.push(new Line("Michal Dvořák", 31, main_color, new Date(2020,10), now));
    lines.push(new Line("Pavel Dohnal", 32, main_color, IDK, IDK));
    lines.push(new Line("Lukáš Lopatovský", 33, main_color, IDK, IDK));
    lines.push(new Line("Miro Kravec", 34, main_color, IDK, IDK));
    create_graph(sketch, lines, 9, new Date(2012,07), now);
}

function setup() {
    new p5(( sketch ) => { sketch.setup = () => { vyvoj(sketch); }; }, 'vyvoj-container')
    new p5(( sketch ) => { sketch.setup = () => { fiks(sketch); }; }, 'fiks-container')
}

