import styles from "./TypingText.module.scss";

export default function TypingText({ children }) {
	return <h3 className={styles.typewriter}>{children}</h3>;
}
