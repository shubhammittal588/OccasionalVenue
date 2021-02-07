
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/delhi.html")
def delhiNCR():
    return render_template("delhi.html")


@app.route("/pune.html")
def pune():
    return render_template("pune.html")


@app.route("/hyderabad.html")
def hyderabad():
    return render_template("hyderabad.html")


@app.route("/banglore.html")
def banglore():
    return render_template("banglore.html")


@app.route("/mumbai.html")
def mumbai():
    return render_template("mumbai.html")


@app.route("/jaipur.html")
def jaipur():
    return render_template("jaipur.html")

@app.route("/categories.html")
def categories():
    return render_template("categories.html")


if __name__ == "__main__":
    app.run(debug=True)
