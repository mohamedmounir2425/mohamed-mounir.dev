/**
 * Utility function for viewing resume on Google Drive
 * Opens resume in a new tab for easy viewing and downloading
 */

export const viewResume = () => {
    const resumeUrl =
        "https://drive.google.com/file/d/1mIZ92lDm2y73AcHp3UwZLXTqJhaoRaoY/view";

    try {
        // Open resume in new tab
        window.open(resumeUrl, "_blank", "noopener,noreferrer");

        return {
            success: true,
            message: "Resume opened in new tab!",
        };
    } catch (error) {
        return {
            success: false,
            message:
                "Failed to open resume. Please contact me directly for a copy.",
        };
    }
};

// Keep the old function for backward compatibility but mark as deprecated
export const downloadResume = async (format = "pdf") => {
    console.warn("downloadResume is deprecated. Use viewResume instead.");
    return viewResume();
};

export const downloadResumeAsBlob = async (format = "pdf") => {
    console.warn("downloadResumeAsBlob is deprecated. Use viewResume instead.");
    return viewResume();
};
