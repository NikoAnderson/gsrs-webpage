/**
 * Created by sheilstk on 6/6/16.
 */

'use strict';

angular.module('ginasWeb.versionFactory', ['ui.router'])
    .factory('versionFactory', function ($http) {
        var version = [
            {
                date: 'September 9, 2016',
                version: '1.2.06-beta',
                filebundled: './releases/gsrsv1_2_06_beta_bundled_h2_smallseed.zip',
                fileempty: './releases/ gsrsv1_2_06_beta_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: [
                        'Fixed structure search reloading issue. A quickly returning substructure search might have the wrong infomation before, and not refresh when the search is complete. Now it refreshes when ready.',
                        'Reindexing previously wouldn\'t update autosuggest or sorting operations, unless the application was also restarted. Now the reindexing will correctly update autosuggest without a restart.',
                        'Empty modifications were being saved which would break display, wrapped each display with a null check.',
                        'In some bulk loads, the same record may have been editted by different threads. In a few cases this was found to cause a OptimisticLockException, and the transaction was cancelled.' +
                        'This is a problem when adding common inverted relationships. The locking mechanism has been reorganized, and is now very unlikely for this to be an issue.',
                        'Fixed edit history bug related to #3.',
                        'Fixed IndexAlreadyClosedException problem, where the Lucene index was closed before all the results were fetched from the database.',
                        'Tags now different than Reference tags, as intended'
                    ]
                }, {
                    type: 'improvement',
                    details: [
                        'Improve indexing performance',
                        'Lazy-load search results to improve search performance and stability',
                        'Improved search analyzer to show more accurate suggestions for restricting global searches',
                        'Allow searching by code systems (BDNUM, CAS, etc)',
                        'Improved keyboard navigation for 508 compliance',
                        'Restrict to names or code search options',
                        'Improved initial browse and paging now far more robust and less likely to cause problems',
                        'Added debugging utilities for developers to add specific delays to database fetches and structure processing, to find problematic areas under stress testing',
                        'A new Role "Approver" has been added. Users with this role can approve substances. SuperUpdater role no longer has approval access. Instead, SuperUpdater can now also update record information for previously approved substances',
                        'Fields to be indexed for analysis have been restricted to a few names fields',
                        'Added CodeSystem indexes to speed up validation',
                        'Only load sketcher on pages that use it, to speed up page loads',
                        'Structure searches now use cache in processing'
                    ]

                }

                ]
            }, {
                date: 'August 15, 2016',
                version: '1.2.04-beta',
                filebundled: './releases/gsrsv1.2.04_small_seed_h2.zip',
                fileempty: './releases/gsrsv1.2.04_beta_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: ['Fixed reporting bug for sequence searches',
                        'Fixed sequence search blocking issue',
                        'Fixed approval button bug',
                        'Fixed wrong URLs for taxonomy search',
                        'Fixed structure search tooltop flicker bug',
                        'Fixed concurrency error']
                }, {
                    type: 'improvement',
                    details: ['advanced CV customization (admin)',
                        '"Change Reason" added to substance editing',
                        'Improved menu/toolbar',
                        'Allow frequency of term to show in suggest API',
                        'Allow expandable CV for stereo types',
                        'Improved relationship consistency processing',
                        'Improved real-time logging',
                        'Improved admin real-time status report',
                        'Improved caching for performance and stability',
                        'Reworked site-selector and management on forms for proteins and nucleic acids',
                        'Reduced thread count',
                        'Improved physical parameter form'
                    ]

                }

                ]
            }, {
                date: 'August 11, 2016',
                version: '1.1.02',
                filebundled: './releases/gsrsv1_1_02_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrsv1_1_02_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: ['Windows deployment "invalid constant type" error fix']
                }
                ]
            }, {
                date: 'June 16, 2016',
                version: '1.1.01',
                filebundled: './releases/gsrsv1_1_01_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrsv1_1_01_empty_h2.zip',
                changelog: []
            }
        ];

        var versionFactory = {
            getData: function () {
                return version;
            }
        };
        return versionFactory;
    });