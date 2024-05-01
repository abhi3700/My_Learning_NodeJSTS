import { Header } from "./header";
import { Tweet } from "react-tweet";

export default function Page() {
    return (
        <section>
            <Header>
                <h1>Lee!</h1>
            </Header>
            <p>This is amazing site! 🎉</p>
            <Tweet id="1785470824826159489"></Tweet>
        </section>
    );
}
