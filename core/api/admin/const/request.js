module.exports = {
    getModules: `
        SELECT * FROM t_module
        WHERE online = false AND is_deleted = false
        LIMIT $1
        OFFSET $2;
    `,
    getScripts: `
        SELECT * FROM t_script
        WHERE online = false AND is_deleted = false
        LIMIT $1
        OFFSET $2;
    `
}