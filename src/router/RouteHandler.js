import RoutePath from './RoutePath';

export default {
    goToPreviousPage(context) {
        return context.$router.go(-1);
    },

    goToHomePage(context) {
        goToRouteIfNotThereYet(context, RoutePath.HOME);
    },

    toToDashboardPage(context) {
        goToRouteIfNotThereYet(context, RoutePath.DASHBOARD);
    }
};

const goToRouteIfNotThereYet = (context, route) => {
    if (context.$route.path != route) {
        context.$router.push(route);
    }
};
