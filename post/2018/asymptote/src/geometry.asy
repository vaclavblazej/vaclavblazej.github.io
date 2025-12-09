import geometry;
import ads;
size(0,90);

real vec(pair a, pair b, pair c) 
{
    pair v=b-a;
    pair u=c-a;
	return v.x*u.y-v.y*u.x;
}

pair[] graph={(0,0.6), (2,0), (3.2,2.2), (1.6,2.4), (-1,1.6)};
pair p=(-1.4,-0.4);
pair[] offsets={(0,0),(-6,0),(-12,0)};

for (int i=0; i<graph.length; ++i) {
    for (int j=0; j<3; ++j){
        draw(graph[i]+offsets[j]--graph[(i+1)%graph.length]+offsets[j],Arrow);
    }
}
for (int i=0; i<graph.length; ++i) {
    for (int j=0; j<2; ++j){
        pair a=graph[i]+offsets[j];
        pair b=graph[(i+1)%graph.length]+offsets[j];
        pair pp=p+offsets[j];
        pair s=(a+b+pp)/3;
        if(vec(s,a,b)>0){
            if(j==0){
                fill(graph[0]--a--b--cycle,green+opacity(0.3));
            }else{
                fill(pp--a--b--cycle,green+opacity(0.3));
                label("$+$",s);
            }
        }else{
            if(j==1)continue;
            fill(pp--a--b--cycle,red+opacity(0.3));
            label("$-$",s);
        }
    }
}
for (int i=1; i<graph.length; ++i) {
    pair pp=p+offsets[1];
    pair g=graph[i]+offsets[1];
    draw(pp--g,dashed);
}
for (int j=graph.length-1; j<graph.length+2; ++j) {
    int i=j%graph.length;
    pair pp=p+offsets[0];
    pair g=graph[i]+offsets[0];
    draw(pp--g,dashed);
}

