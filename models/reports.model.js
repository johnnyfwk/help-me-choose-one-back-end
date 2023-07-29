const database = require("../database/connection");

function getAllReports() {
    const queryString = `
        SELECT *
        FROM reports
        ORDER BY report_id DESC;
    `
    return database
        .query(queryString)
        .then((response) => {
            return response.rows;
        })
}

function getSingleReportById(reportId) {
    if (isNaN(reportId)) {
        return Promise.reject({status: 400, msg: "Please enter a valid report ID."});
    }

    const queryString = `
        SELECT *
        FROM reports
        WHERE report_id = $1;
    `
    const queryValue = [reportId];

    return database
        .query(queryString, queryValue)
        .then((response) => {
            if (response.rowCount === 0) {
                return Promise.reject({status: 404, msg: "This report does not exist."});
            }
            return response.rows[0];
        })
}

function createSingleReport(report) {
    const queryString = `
        INSERT INTO reports
            (report_date, report_owners_id, report_owners_name, report_post_id, report_post_owners_id, report_post_owners_name, report_comment_id, report_comment_owners_id, report_comment_owners_name, report_title, report_description)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *;
    `
    const queryValues = [
        report.report_date,
        report.report_owners_id,
        report.report_owners_name,
        report.report_post_id,
        report.report_post_owners_id,
        report.report_post_owners_name,
        report.report_comment_id,
        report.report_comment_owners_id,
        report.report_comment_owners_name,
        report.report_title,
        report.report_description
    ];

    return database
        .query(queryString, queryValues)
        .then((response) => {
            return response.rows[0];
        })
}

module.exports = {
    getAllReports,
    getSingleReportById,
    createSingleReport
}