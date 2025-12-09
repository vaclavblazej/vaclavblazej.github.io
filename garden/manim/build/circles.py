from manim import *
config.frame_width=9.5

class Main(Scene):
    def construct(self):
        grp = Group(*[
            Arc(1, 0, PI/2),
            ArcBetweenPoints(ORIGIN, DOWN),
            AnnularSector(1, 1.2, PI*3/2),
            Annulus(1, 1.2),
            Circle(1),
            Ellipse(1.5, 2),
        ])
        self.add(grp.arrange_in_grid(2,3))
