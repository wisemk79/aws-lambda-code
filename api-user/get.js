module.exports = async function get (conn, event) {
    try {
        return await new Promise((resolve, reject) => {
            conn.query(
                'SELECT * FROM user',
                function(err, rows, fields) {
                    console.log('검색결과?', err, rows, fields);
                    if (!err) {
                        resolve(rows);
                    } else {
                        console.log('Error while performing Query.', err);
                        reject(err)
                    }
                }
            );
        });
    } catch (error) {
        console.log('get error=>', error)
        return {
            status: "FAIL"
        };
    }
}