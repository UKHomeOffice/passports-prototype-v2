module.exports = {
    '/': {
        template: 'index',
        next: '/processing-image'
    },
    '/processing-image': {
        next: '/photo-uploaded-success'
    },
    '/photo-uploaded-success': {
        next: '/photo-uploaded-success'
    }
};
