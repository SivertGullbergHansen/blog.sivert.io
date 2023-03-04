const exitAnimation = { opacity: 0, y: -5, transition: { duration: .33, type: 'spring' } }
const transition = { type: 'spring', stiffness: 200 }
export const parentArticleTransition = { staggerChildren: .015, type: 'spring' }

export const ArticleCardVariant = {
    initial: { opacity: .0001, x: -50 },
    animate: { opacity: 1, x: 0, transition: transition },
    exit: exitAnimation,
}

export const ArticleContentVariant = {
    initial: { opacity: .0001, y: -50 },
    animate: { opacity: 1, y: 0, transition: transition },
    exit: exitAnimation,
}