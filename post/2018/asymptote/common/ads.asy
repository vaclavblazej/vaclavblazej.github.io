/*
 *  Makra pro Asymptote společná pro všechny obrázky
 *
 *  http://pruvodce.ucw.cz/
 */

void ads_init_pic() {
	unitsize(1cm);
}

ads_init_pic();

/*** Základní typy čar a velikosti ***/

pen thin = black + roundcap + 0.2mm;
pen hair = black + roundcap + 0.1mm;
pen quarterthick = thin + 0.2mm;
pen halfthick = thin + 0.4mm;
pen almostthick = thin + 0.5mm;
pen thick = thin + 0.6mm;
defaultpen(thin);

pen shortdashed = linetype(new real[] { 1, 4 });
pen middashed = linetype(new real[] { 4, 4 });
pen finedotted = thin + 0.3mm + linetype(new real[] { 0, 2.5 });
pen agray = gray(0.6);
pen area_gray = gray(0.75);

// Šířka čáry v uživatelských souřadnicích
real line_width_user(pen p)
{
	pair lw = inverse(currentpicture.scaling()) * (0, linewidth(p));
	return lw.y;
}

texpreamble("\font\eightrm=cmr8\font\ninerm=cmr9\font\seventt=cmtt8 at 7pt");

/*** Kreslení grafů ***/

real vertex_size = 0.06;
arrowbar e_arrow = Arrow(size=7);
arrowbar e_biarrow = Arrows(size=7);
arrowbar e_smallarrow = Arrow(size=5);
arrowbar e_smallbiarrow = Arrows(size=5);
arrowbar e_miniarrow = Arrow(size=3);

int v_invisible = -1;
int v_black = 0;
int v_white = 1;
int v_gray = 2;
int v_dashed = 3;
int v_lightgray = 4;
int v_bold = 5;
int v_shadow = 6;

void draw_in_mode(path p, int mode=0)
{
	if (mode == v_black)
		filldraw(p);
	else if (mode == v_white)
		filldraw(p, white, black);
	else if (mode == v_gray)
		filldraw(p, agray, black);
	else if (mode == v_dashed)
		filldraw(p, white, black + shortdashed);
	else if (mode == v_lightgray)
		filldraw(p, area_gray, black);
	else if (mode == v_bold)
		filldraw(p, white, black + thick);
	else if (mode == v_shadow)
		filldraw(p, white, agray);
}

void vertex(pair p, int mode=0)
{
	if (p.x > 100 || p.y > 100) {
		return;
	}
	draw_in_mode(circle(p, vertex_size), mode);
}

pair current_graph[];

void graph(pair g[], int mode=0)
{
	current_graph = g;
	for (pair p: g) {
		vertex(p, mode);
	}
}

void labeled_graph(pair g[])
{
	vertex_size = 0.17;
	graph(g, 1);
	for (int i=0; i<g.length; ++i) {
		if (g[i].x < 100 && g[i].y < 100) {
			label("\eightrm " + (string) i, g[i]);
		}
	}
}

void vertex(int v, int mode=0)
{
	vertex(current_graph[v], mode);
}

void edge(pair v, pair w, pen p = thin)
{
	pair d = unit(w-v);
	draw((v+d*vertex_size) -- (w-d*vertex_size), p + squarecap);
}

void edge(int v, int w, pen p = thin)
{
	edge(current_graph[v], current_graph[w], p);
}

void edged(pair v, pair w, pair dv, pair dw, pen p = thin)
{
	draw(v + vertex_size*dv {dv} .. {dw} w - vertex_size*dw, p + squarecap);
}

void edged(int v, int w, pair dv, pair dw, pen p = thin)
{
	edged(current_graph[v], current_graph[w], dv, dw, p);
}

void arc(pair v, pair w, pen p = thin, arrowbar a = e_arrow)
{
	pair d = unit(w-v);
	draw((v+d*vertex_size) -- (w-d*vertex_size), p + squarecap, a);
}

void arc(int v, int w, pen p = thin, arrowbar a = e_arrow)
{
	arc(current_graph[v], current_graph[w], p, a);
}

void arcd(pair v, pair w, pair dv, pair dw, pen p = thin, arrowbar a = e_arrow)
{
	draw(v + vertex_size*dv {dv} .. {dw} w - vertex_size*dw, p + squarecap, a);
}

void arcd(int v, int w, pair dv, pair dw, pen p = thin, arrowbar a = e_arrow)
{
	arcd(current_graph[v], current_graph[w], dv, dw, p, a);
}

void selfloop(pair v, int d, pen p = thin)
{
	draw(v + vertex_size*dir(d+45) {dir(d+45)} .. v + 3*vertex_size*dir(d) .. {-dir(d-45)} v + vertex_size*dir(d-45), p + squarecap, e_arrow);
}

void selfloop(int v, int d, pen p = thin)
{
	selfloop(current_graph[v], d, p);
}

/*** Geometrie ***/

void fpoint(pair p)
{
	fill(circle(p, 0.08));
}

void epoint(pair p)
{
	filldraw(circle(p, 0.08), white, black);
}

/*** Dílčí obrázky ***/

picture ads_sub_pic()
{
	picture p = new picture;
	currentpicture = p;
	ads_init_pic();
	return p;
}

frame centered(picture p)
{
	frame f = p.fit();
	return align(f, (0,0));
}
