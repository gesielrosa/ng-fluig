abstract class FluigConfig {
    public static APP_ROOT = (window as any)['_app_baseUrl'];
    public static APP_PAGE_CODE = (window as any)['_app_pageCode'];
    public static APP_BASE =
        FluigConfig.APP_ROOT && FluigConfig.APP_PAGE_CODE
            ? FluigConfig.APP_ROOT + '/' + FluigConfig.APP_PAGE_CODE
            : '';
}

export {FluigConfig as FLUIG_CONFIG};
