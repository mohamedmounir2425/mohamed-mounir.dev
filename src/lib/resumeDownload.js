/**
 * Utility function for downloading resume
 * Supports multiple file formats and provides user feedback
 */

export const downloadResume = async (format = "pdf") => {
    const resumeFiles = {
        pdf: {
            path: "/Mohamed-Mounir_Frontend-developer(ReactJS).pdf",
            filename: "Mohamed-Mounir_Frontend-developer(ReactJS).pdf",
            mimeType: "application/pdf",
        },
        docx: {
            path: "/resume.docx",
            filename: "Mohamed_Mounir_Resume.docx",
            mimeType:
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
    };

    const fileConfig = resumeFiles[format] || resumeFiles.pdf;

    try {
        // Method 1: Try direct download first (simpler approach)
        const link = document.createElement("a");
        link.href = fileConfig.path;
        link.download = fileConfig.filename;
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return { success: true, message: "Resume download initiated!" };
    } catch {
        try {
            // Method 2: Blob-based download (more reliable for special characters)
            const response = await fetch(fileConfig.path);

            if (!response.ok) {
                throw new Error("Resume file not found");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = fileConfig.filename;
            link.style.display = "none";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up
            setTimeout(() => {
                window.URL.revokeObjectURL(url);
            }, 100);

            return {
                success: true,
                message: "Resume downloaded successfully!",
            };
        } catch {
            // Method 3: Open in new tab as fallback
            try {
                window.open(fileConfig.path, "_blank");
                return {
                    success: true,
                    message:
                        "Resume opened in new tab. Please save it manually.",
                };
            } catch {
                return {
                    success: false,
                    message:
                        "Resume download failed. Please contact me directly for a copy.",
                };
            }
        }
    }
};

/**
 * Alternative method using blob for better browser compatibility
 */
export const downloadResumeAsBlob = async (format = "pdf") => {
    const resumeFiles = {
        pdf: {
            path: "/Mohamed-Mounir_Frontend-developer(ReactJS).pdf",
            filename: "Mohamed-Mounir_Frontend-developer(ReactJS).pdf",
            mimeType: "application/pdf",
        },
    };

    const fileConfig = resumeFiles[format] || resumeFiles.pdf;

    try {
        const response = await fetch(fileConfig.path);

        if (!response.ok) {
            throw new Error("Resume file not found");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = fileConfig.filename;
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 100);

        return { success: true, message: "Resume downloaded successfully!" };
    } catch {
        return {
            success: false,
            message:
                "Resume download failed. Please contact me directly for a copy.",
        };
    }
};
