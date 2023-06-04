import Confetti from "react-dom-confetti";

export default function AnimationBox({ active }) {
    const config = {
        angle: "360",
        spread: "360",
        startVelocity: 40,
        elementCount: "200",
        dragFriction: "0.11",
        duration: "5610",
        stagger: "2",
        width: "10px",
        height: "10px",
        perspective: "1000px",
        colors: ["#000", "#f00"],
    };
    return <Confetti active={active} config={config} />;
}
