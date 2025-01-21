export enum contentType {
    // JSON
    JSON = "application/json",

    // HTML
    HTML = "text/html",

    // Plain Text
    PLAIN_TEXT = "text/plain",

    // XML
    XML = "application/xml",

    // Form Data
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",

    // JavaScript
    JAVASCRIPT = "application/javascript",

    // CSS
    CSS = "text/css",

    // Images
    PNG = "image/png",
    JPEG = "image/jpeg",
    GIF = "image/gif",
    SVG = "image/svg+xml",
    WEBP = "image/webp",

    // Audio
    MP3 = "audio/mpeg",
    WAV = "audio/wav",
    OGG_AUDIO = "audio/ogg",

    // Video
    MP4 = "video/mp4",
    WEBM_VIDEO = "video/webm",
    OGG_VIDEO = "video/ogg",

    // PDFs and Files
    PDF = "application/pdf",
    ZIP = "application/zip",
    OCTET_STREAM = "application/octet-stream",

    // CSV and Spreadsheets
    CSV = "text/csv",
    EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

    // JSON for APIs
    HAL_JSON = "application/hal+json",
    PROBLEM_JSON = "application/problem+json",

    // Miscellaneous
    YAML = "application/x-yaml",
    EVENT_STREAM = "text/event-stream"
}