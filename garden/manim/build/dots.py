from manim import *
config.frame_width=2

class Main(Scene):
    def construct(self):
        label = MathTex(r'\alpha', color=BLACK)
        grp = Group(*[
            Dot(),
            AnnotationDot(),
            LabeledDot(label),
        ])
        self.add(grp.arrange())
