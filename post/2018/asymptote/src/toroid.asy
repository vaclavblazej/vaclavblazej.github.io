import geometry;
import ads;
size(0,90);

real u = 1;
pair o=(0,0)*u;
pair x=(4,0)*u;
pair y=(0,3)*u;
pair xy=(x.x,y.y)*u;

draw(o--x);
draw(o--y);
draw(xy--x);
draw(xy--y);
draw(xy--y);

pair v[] = {
	(o.x,o.y),
	(x.x,o.y),
	(o.x,y.y),
	(x.x,y.y),
    (1,y.y/4),
    (2,y.y/4),
    (3,y.y/4),
    (1,y.y),
    (2,y.y),
    (3,y.y),
    (o.x,    y.y*3/4),
    (x.x/3,  y.y*3/4),
    (x.x*2/3,y.y*3/4),
    (x.x,    y.y*3/4),
    (x.x/6,  y.y/2),
    (x.x*5/6,y.y/2),
};

labeled_graph(v);

//edge(10, 11);
//edge(11, 12);

//arcd(0, 3, dir(270), -dir(45), shortdashed, e_smallarrow);
//arcd(6, 0, dir(155), -dir(-70), shortdashed, e_smallarrow);
//arc(6, 3, shortdashed, e_smallarrow);


