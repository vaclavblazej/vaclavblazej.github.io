from manim import *
config.frame_width = 10

class Main(Scene):
    def construct(self):
        grp = Group(*[
            Square(),
            Triangle(),
            Circle(),
            RegularPolygon(5),
            Star(5),
            Rectangle(width=3, height=1),
            Polygon([0,0,0], [0,1,0], [1,0,0]),
        ])
        self.add(grp.arrange_in_grid(2,4))
