import React from "react";

interface Props {
    className?: string;
    title?: string;
}

export const LogoStampTechnology = ({ className = "", title = "Teknologi fra Fremtind" }: Props) => {
    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "ATTENTION! This component should not be used in most Jøkul projects, and will be deprecated. If you are building an application for external use, please use the SVG asset directly instead. Fremtind branded solutions should not use the logo stamps.",
        );
    }
    return (
        <svg
            aria-labelledby="stampTechnologyTitle"
            role="img"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 682.66669 682.66669"
        >
            <title id="stampTechnologyTitle">{title}</title>
            <g fill="currentColor">
                <path d="M54.175 262.444l37.9 10.393-.83 3.027-37.9-10.39-3.591 13.103-2.876-.788 8.028-29.296 2.874.79-3.605 13.161M106.4 233.6l-37.353-19.812 12.846-24.223 2.636 1.396-11.348 21.395 13.697 7.268 9.99-18.833 2.635 1.396-9.99 18.832 15.751 8.358 11.35-21.396 2.633 1.398L106.4 233.6M155.504 162.972l-27.524-5.216 2.024 16.53 8.845 7.733-2.106 2.41-31.832-27.834 2.107-2.411 19.618 17.157-4.114-34.884 2.543-2.909 2.556 21.085 30.23 5.658-2.347 2.681M201.896 125.79l-41.81-16.453 21.473 30.69-2.574 1.801-24.241-34.65 2.92-2.042 41.824 16.37-21.437-30.638 2.525-1.767 24.24 34.647-2.92 2.043M241.941 65.993c-2.86-1.198-6.197-1.122-9.297.074-3.097 1.197-5.619 3.385-6.93 6.193-2.505 5.252-.31 11.436 1.494 16.11 1.805 4.673 4.357 10.782 9.743 12.986 2.856 1.197 6.194 1.121 9.296-.073 3.098-1.198 5.62-3.386 6.93-6.195 2.504-5.25.29-11.49-1.514-16.163s-4.338-10.729-9.722-12.932zm14.108 30.16c-1.577 3.294-4.369 6.29-8.708 7.966-4.338 1.674-8.421 1.333-11.802-.047-6.162-2.54-9.182-8.852-11.374-14.528-2.192-5.675-4.177-12.323-1.322-18.348 1.576-3.293 4.368-6.29 8.708-7.965 4.337-1.678 8.42-1.336 11.801.044 6.163 2.542 9.163 8.8 11.352 14.474 2.192 5.675 4.199 12.379 1.345 18.404M292.313 90.301l-6.249-41.828 3.107-.464 5.816 38.938 21.982-3.287.431 2.89-25.087 3.751M368.612 50.313c-2.099-2.281-5.163-3.606-8.477-3.812-3.318-.206-6.523.732-8.887 2.738-4.468 3.726-5.055 10.266-5.368 15.266-.31 5-.541 11.619 3.43 15.871 2.098 2.28 5.163 3.604 8.48 3.81 3.315.207 6.52-.731 8.883-2.737 4.468-3.725 5.062-10.325 5.372-15.325.312-5.003.536-11.56-3.433-15.81zm.227 33.303c-2.811 2.336-6.598 3.893-11.24 3.607-4.642-.288-8.208-2.302-10.706-4.967-4.537-4.881-4.645-11.881-4.268-17.955.378-6.07 1.35-12.944 6.458-17.229 2.809-2.336 6.598-3.893 11.24-3.607 4.642.288 8.208 2.302 10.704 4.966 4.54 4.884 4.652 11.821 4.274 17.896-.378 6.07-1.354 13.005-6.462 17.289M430.116 101.085l1.257-6.412c-3.458 3.684-9.168 4.814-14.078 3.316-4.392-1.336-7.724-4.285-9.502-7.57-3.089-5.616-1.884-12.479-.128-18.243 1.771-5.819 4.486-12.036 10.255-15.016 3.364-1.717 7.752-2.439 12.143-1.1 8.436 2.57 12.668 9.405 11.126 16.543l-3.062-.934c.566-2.694.122-4.762-.876-6.876-1.443-2.933-4.492-4.733-8.018-5.806-3.522-1.074-6.737-.683-9.5.721-4.942 2.545-7.436 8.456-8.948 13.419-1.494 4.906-2.805 11.489-.029 16.262 1.572 2.724 4.073 4.671 7.424 5.691 3.293 1.003 6.739.683 9.177-.695 4.336-2.421 6.084-7.124 7.439-11.574l-12.075-3.679.886-2.908 15.138 4.612-6.377 20.937-2.252-.688M461.877 115.385l19.799-37.368 2.828 1.5-19.799 37.367-2.828-1.499M550.824 131.777l-11.739 11.372 14.834 15.311-2.142 2.076-14.836-15.312-14.35 13.9-2.184-2.255 30.374-29.421 18.658 19.26-2.142 2.073-16.473-17.004M598.376 192.361l-6.464-10.702-15.827 9.558 6.466 10.702c3.653 6.05 8.533 7.901 13.692 4.788 5.154-3.115 5.786-8.298 2.133-14.346zm-14.739 15.394l-11.584 17.157-1.78-2.948 11.076-16.497-7.713-12.772-15.419 9.313-1.624-2.69 36.196-21.86 8.088 13.393c4.842 8.013 3.33 14.856-2.949 18.648-4.748 2.866-10.287 2.12-14.29-1.744M623.892 252.297l-25.556-1.366 5.633 17.533zm-31.641 25.704l9.286-7.55-6.336-19.719-11.909-.613-.999-3.106 45.226 2.536.942 2.932-35.229 28.567-.981-3.047M134.343 503.013l-10.54 8.875 12.844 15.244-3.832 3.227-12.844-15.244L105.74 527.1l-3.464-4.11 32.343-27.24 17.864 21.204-3.742 3.15-14.398-17.092M189.62 554.528l-9.301-6.617-8.604 12.103 9.301 6.617c4.132 2.94 8.261 3.389 11.37-.986 3.11-4.374 1.366-8.177-2.766-11.117zm-14.727 35.412l3.599-19.03-9.647-6.86-10.192 14.338-4.38-3.116 24.5-34.463 13.68 9.734c4.084 2.906 6.144 6.054 6.682 9.364.429 2.94-.079 5.946-2.22 8.958-2.143 3.015-4.579 4.356-7.496 4.918-1.794.333-3.858.11-5.911-.547l-3.793 20.136-4.822-3.432M221.965 615.233l14.934-39.57 26.778 10.102-1.725 4.578-21.753-8.207-4.55 12.055 19.098 7.204-1.771 4.686-19.096-7.2-5.16 13.672 21.752 8.206-1.727 4.574-26.78-10.1M332.999 639.53l2.749-35.56-15.95 33.942-4.217-.324-10.52-36.285-2.773 35.856-5.119-.394 3.26-42.16 7.708.595 10.234 35.305 15.48-33.32 7.526.58-3.261 42.16-5.117-.396M395.184 596.503l7.124 36.656-5.335 1.034-7.125-36.653-12.51 2.43-.943-4.86 30.354-5.898.944 4.86-12.509 2.43M454.212 617.63l-16.072-39.12 5.084-2.088 16.072 39.12-5.084 2.087M523.944 578.472l-36.75-15.716 19.557 27.81-4.247 2.99-24.33-34.592 4.942-3.476 36.819 15.812-19.628-27.905 4.249-2.991 24.328 34.593-4.94 3.475M554.29 500.155c-2.783.301-5.317 1.898-7.073 4.052l-6.028 7.398 25.196 20.538 6.03-7.398c1.754-2.154 2.808-4.957 2.542-7.744-.498-4.77-4.514-8.434-8.029-11.3-3.513-2.862-7.82-5.982-12.637-5.546zm25.731 16.297c.311 4.15-1.182 8.153-3.817 11.384l-9.424 11.563-32.779-26.718 9.426-11.564c2.632-3.23 6.3-5.464 10.426-5.993 6.396-.864 11.794 2.52 16.51 6.365 4.716 3.844 9.174 8.57 9.658 14.963M341.28 235.977L195.192 382.068l11.28 11.281 68.58-68.581 68.588 68.587 10.872-10.87-68.588-68.588 55.779-55.78 134.914 134.916 10.858-10.858L341.28 235.977" />
            </g>
        </svg>
    );
};
