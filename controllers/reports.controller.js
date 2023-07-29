const {
    getAllReports,
    getSingleReportById,
    createSingleReport
} = require("../models/reports.model");

function getReports(request, response, next) {
    getAllReports()
        .then((reports) => {
            response.status(200).send({reports})
        })
        .catch((error) => {
            next(error);
        })
}

function getReportById(request, response, next) {
    getSingleReportById(request.params.report_id)
        .then((report) => {
            response.status(200).send({report})
        })
        .catch((error) => {
            next(error);
        })
}

function createReport(request, response, next) {
    createSingleReport(request.body)
        .then((report) => {
            response.status(201).send({report});
        })
        .catch((error) => {
            next(error);
        })
}

module.exports = {
    getReports,
    getReportById,
    createReport
}