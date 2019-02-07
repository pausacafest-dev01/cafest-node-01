module.exports = {
    getHomePage: (req, res) => {
        /*
        query = " SELECT * from comentary";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('smarkio.ejs', {
                title: 'Welcome to Socka | View Players',
                comentaries: result
            
            });
        });*/

        res.render('hello.ejs', {title: "Ola"});
        
    },
    

    /*end routes file*/
};
