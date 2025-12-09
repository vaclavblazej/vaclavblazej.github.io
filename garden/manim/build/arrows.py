from manim import *
config.frame_width=5

def build_arrow(tip):
    return Arrow(ORIGIN, 2*DOWN, tip_shape=tip)

class Main(Scene):
    def construct(self):
        tips = [ArrowTriangleTip, ArrowTriangleFilledTip,
                ArrowCircleTip, ArrowCircleFilledTip,
                ArrowSquareTip, ArrowSquareFilledTip,
                StealthTip]
        self.add(Group(*map(build_arrow, tips)).arrange())
