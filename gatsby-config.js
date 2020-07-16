module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true,
                tailwind: true
            }
        }
    ]
}