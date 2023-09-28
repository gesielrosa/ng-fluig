<#assign coreContext='<%= code %>'>

<link rel="stylesheet" href="/${coreContext}/resources/styles.css">

<app-root></app-root>

<script>
(function setEnvironmentParams() {
    const protectedContextPath = '${protectedContextPath!""}';
    const contextPath = '${contextPath!""}';

    // base url for frontend application
    let baseUrl = protectedContextPath + '/${tenantCode!""}';

    // replace '/p' for public pages
    if (window.location.href.indexOf(protectedContextPath) === -1) {
        baseUrl = baseUrl.replace(protectedContextPath, contextPath);
    }

    // base url for frontend application
    window['_app_baseUrl'] = baseUrl;

    // get page code
    window['_app_pageCode'] = '${(pageCode!"")}';
})();
</script>

<script src="/${coreContext}/resources/runtime.js" type="module"></script>
<script src="/${coreContext}/resources/polyfills.js" type="module"></script>
<script src="/${coreContext}/resources/main.js" type="module"></script>
