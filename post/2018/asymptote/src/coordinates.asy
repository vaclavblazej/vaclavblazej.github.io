import geometry;
import ads;
size(0,90);

pair o=(0,0);
pair x=(3,0);
pair y=(0,2);
pair b=(2,1.2);
pair by=(0,b.y);
pair bx=(b.x,0);

path ar=arc(b,o,x,1.8);
fill(o--ar--cycle,green+opacity(0.3));
draw(o--x,thin+dashed);
draw(o--y,thin+dashed);
draw(b--bx,thin+dotted);
draw(b--by,thin+dotted);
draw(o--b,e_smallarrow);


