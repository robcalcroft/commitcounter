 2015 Rob Calcroft
 *
 * require("commitcount")(function(err, shortlog) {
 * 		// shortlog is an object with the data in
 * });
 *
 */

module.exports = function(callback) {
    var command = "git shortlog -s -n < /dev/tty";

    require("child_process").exec(command, function(err, stdout, stdin) {
        var outputRows = stdout.split("\n"),
            shortlog = {},
            nameAndCommitNumber;

        outputRows.map(function(value) {
            nameAndCommitNumber = value.split("\t");

            // Stops any funny business
            if(nameAndCommitNumber[1] === undefined) {
                return false;
            }
            shortlog[nameAndCommitNumber[1]] = nameAndCommitNumber[0].replace(/ /g, "");
        });
        
        callback(err, shortlog);
    });
};
