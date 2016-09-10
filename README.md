#Progress Bar DEMO

#Requirements
- nodejs v6.5.0
- npm v3.10.3
- gulp-cli v1.2.2

#Run the example

Once the requirements are well installed in your local, just run `npm install` and then `npm run`, open a browser window at `http://localhost:4000`

# Options

This is a very straight forward custom progress bar implementation, you can customize the results by chaging the `data-attributes` in the tag elements with id's `#progressBar & #progressTarget`

## Data-attributes

- data-target: this holds the current target value, this value is use to compute the progress in the 'progress-bar' and also update the target text
- data-reached: this holds the current reached value, this value is use to compute the progress in the 'progress-bar', and also use to update the text in the arrow indicator of the progress bar

