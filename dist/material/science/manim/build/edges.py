from manim import *
config.frame_width=5.5

class Main(MovingCameraScene):
    def construct(self):
        s = ORIGIN
        t = 2*DOWN
        self.camera.frame.set(ratio=3)
        grp = Group(*[
            Line(s, t),
            Arrow(s, t),
            Arrow(s, t, buff=0),
            DoubleArrow(s, t, buff=0),
            ArcBetweenPoints(s, t),
            CurvedArrow(s, t),
            CurvedDoubleArrow(s, t),
            CubicBezier(s, s+LEFT/2, t+RIGHT/3, t),
        ])
        self.add(grp.arrange())
