/**
 * Created by sheilstk on 6/6/16.
 */

'use strict';

angular.module('ginasWeb.versionFactory', ['ui.router'])
    .factory('versionFactory', function ($http) {
        var version = [
            {
                date: 'October 30, 2019',
                version: '2.4',
                filebundled: './releases/gsrs2_4_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrs2_4_empty_h2.zip',
                changelog: [{}
                ]
            },
            {
                date: 'February 25, 2019',
                version: '2.3.3',
                filebundled: './releases/gsrs2_3_3_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrs2_3_3_empty_h2.zip',
                changelog: [{
                    type: 'Improvements',
                    details: ["Molvec added - adds a program that uses OCR to discern and convert a chemical structure from an uploaded image into a format displayable in the structure editor. Images are uploaded by copying and pasting or dragging and dropping them onto the structure editor, after which the programs best approximation of that structure will appear, along with a copy of the original image below the editor. It also allows molfiles and SMILES text to be copied and pasted directly into the editor.",
                        "Created scheduled task for remaking backups",
                        "Added option to return to substance edit form after the form is submitted",
                        "Improved performance of facet value filtering",
                        "Improved protein validation rule check",
                        "Improved the speed for sequence search results",
                        "Added ability to search by “other” fields in the query builder",
                        "Substance Hierarchy tree improvements",
                        "Updated public name export filtering",
                        "Added ability to sort by molecular weight on the browse page",
                        "Added indication of the preferred substance name on the browse page",
                        "Added a tab to display applications by center",
                        "Updated the component substance record to indicate when a substance is part of a mixture or group 1 specified substance"]
                }, {
                    type: 'Bug fixes',
                    details: ["Fixed an error that occurred when adding existing terms while registering a protein",
                        "Fixed error preventing deletion of certain duplicate relationship",
                        "added developmental stage  option for the “part/fraction” field on the structurally diverse edit form",
                        "Fixed bug preventing registration of mineral structurally diverse substances",
                        "Eliminated double searches for identical subunits",
                        "Fixed error caused by including semicolons in the global search",
                        "Fixed bug causing references to be missing from new relationships",
                        "Improved the layout of details view reference tables",
                        "Fixed edit form ‘add relationship’ button layout",
                        "Fixed bug preventing substances from being upgraded or converted with a missing self reference"]

                }

                ]
            },
            {
                date: 'October 10, 2018',
                version: '2.3.1',
                filebundled: './releases/gsrs2_3_1_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrs2_3_1_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: ["improved handling of empty types on new forms for Relationships and Codes ",
                        "Fixed the error cause by clicking \"found exact duplicate sequence in ....\" links",
                        "Fixed Nucleic Acid subunits not coming back in the right order",
                        "Improved ease of adding CV terms",
                        "Adjusted word-wrapping for CV values",
                        "Fixed the positioning and word-wrapping of the \"Browse\" and \"Search\" page records",
                        "Fixed the inability to describe \"X\"es in the amino acid sequence of a protein under Structural Modification",
                        "Fixed alignment of Grid Browse View elements",
                        "Fixed issue where smiles strings added via the REST API under the \"molfile\" property were not being converted to a molfile and dearomatized",
                        "Relationship Modifications are now working correctly",
                        "Fixed issue preventing molfiles from being saved from the substance creation screen",
                        "Added an odd number of sites in Other Links fails (Proteins)",
                        "Added Validation rule when adding \"One of\" components to a Mixture Record",
                        "Fixed an issue causing JSDraw to prevent users from setting chiral flags",
                        "Prevented Existing Relationship Types from being wiped whenever the Type itself is edited.",
                        "Fixed canceled exports not being deleted and displaying a non-functional cancel button",
                        "Fixed inability to upgrade a Concept when it has relations",
                        "Fixed Substance Update submissions from failing when the edit window is open too long",
                        "Added \"amount\" on structurally diverse structural modifications section",
                        "Fixed the display of \'Hybrid Organism Details\' of Structurally Diverse substances with more than one component",
                        "Replaced the Oracle FARM substance ID trigger with a post-commit processor in the Java code",
                        "Removed the ability to ad the same name twice to the same record",
                        "Improved Validation of \"\" Field Values",
                        "Fixed Relationships not displaying amounts",
                        "Added the display of relationships with mediator substances to the View Page of the substance ",
                        "Fixed Nucleic Acid Classifications not displaying on registration forms",
                        "Fixed the functionality of the Parent Organism Details field when adding a Part or Fraction of Structurally Diverse substances"]
                }, {
                    type: 'improvement',
                    details: ["Created a GSRS Data Dictionary with information about every field returned from the API",
                        "Improved user access management for a substance",
                        "Added Hierarchy View to Browse Substances/Global Search Results",
                        "Added a Validation rule which allows only admins to update existing relationships",
                        "Updated the Related Substance Name on the Substance Relationship",
                        "Improved the ad-hoc SQL reporting scheduled jobs mechanism to accept a TIMESTAMP for the saved report file",
                        "Allowed for alphabetical sorting of CV Terms and CV Entries on the Admin Page",
                        "Created Top-Docking Submission Menu",
                        "Added facets for Product columns in the \"Browse Substance\" page.",
                        "Fixed an issue where Attempting to create a user account which already exists results in a java Exception",
                        "Added ability for admins to manage facet configuration",
                        "Added the option to mark a Reference as Public Domain to the same simplified view as marking the reference itself public",
                        "Added the ability to prevent a SMILES structure from being entered as Molfile, and vice-versa",
                        "Compel the user to delete the old relationship when an alt definition is edited/created",
                        "Improved the limit of relationships and references that can be handled by JSON",
                        "Added a validation rule to prevent a sub-concept from being related to two parents",
                        "Prevented the entry of two consecutive spaces in any NAME through a validation rule",
                        "Improved View Relationships on Old Forms",
                        "Improved management of Validation Rules",
                        "Added automatic Glycosylation selection based on the sequence for Proteins",
                        "Added Comments field to Property",
                        "Added visual loading indicator to the wait for the Registration/Edit Form to Fully Load",
                        "Added support for large Nucleic Acids",
                        "Updated SPL Term Validation (XML) to match the logic of the SPL cron job"]

                }

                ]
            },{
                date: 'October 12, 2017',
                version: '2.0',
                filebundled: './releases/gsrs2_0_beta_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrs2_0_beta_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: [
                        'fixed issue of structures sometimes losing lychi information when cached',
'fixed inability to remove NA sugar',
'Bug fix for suggestions with white space getting listed multiple times.',
'fix for deadlock issue of empty search results',
'Fixes for creating multiple UserProfiles for the same Principal. ',
'added Suggester decorator incase we ever want to change the suggestion algorithm used by lucene.',
'fixed bug if backup object is not made. the next update to that object would fail.',
'fixed version view for protein sequences',
'fixed legacy info processor not to trigger on upgrades',
'fixed export filename for IE download',
'fix for rendering / exporting problem structures-ensured Session objects are not eligable for edit history',
'fix for apparent version duplicates on nested transactional update, restrict history on entities',
'fix for missing records in special matches searches',
'fixed double edit on certain inverse relationships',
'fixed inconsistent transaction commit order of operations',
'Fix for unstarted app config check',
'fixed zoom feature for pending molecules',
'Fixed encoding for searching and and other escape chars',
'fixed relationship selector to encode query, added SPL basic export',
'only allows sysadmin group members to see things while re-indexing',
'fixed implicit hydrogens on metals',
'fix for long name search',
'Fix for modification grouping on forms',
'fixed subunit search on NAs',
'Fix for upgrading concepts to protein substances',
'fixed polymer upgrade',
'fixed modifications update problem',
'Fixed indexing for NA and UI for searching NA sequences',
'fixed aggressive find/replace for search -> searchProteins',
'fixed reorder+remove bug on names and other lists',
'fixed fasta export',
'fixed nucleotideSequence search',
'Fixed export for deprecated records',
'fixed spl validation export to include sub concepts',
'Fixed parsing error on mofication without sites.'
                    ]
                }, {
                    type: 'improvement',
                    details: [
                       'Added support for ad-hoc mapping file for legacy syonyms and keys',
'show selected facets on top',
'enhancements to TSV and spreadsheet exports',
'Allow support for different facets per role',
'Allow facets for ATC',
'force substance records to be the substance class they specify at construction',
'added error logging for failed updates',
'allow structure searching on mixtures',
'Allow validation to continue on missing reference',
'Added utility function to determine ingredient type',
'adopting FDA validation rules, emtpy sequence sometimes allowed for proteins',
'allow proxy for resolving structures',
'updated to 2.0 forms',
'Allow global search after pressing menu item',
'dont allow duplicate users',
'added new facet controls',
'updated facet search',
'updated facet decorator',
'added RequestHelper class from additionaldata',
'added structure search support for mixutres',
'Added dictionary export',
'allow deleting sugars',
'added new codesystem url patterns',
'changed to use asset routing for new forms',
'added the link to new forms for all substances',
'added tests for queries with stop words in them',
'implemented bug fixes for seqaln to make searches work',
'added special setter check to stringify non-strings',
'refactored NucleicAcidSubstancebuilder to make adding sequences easier.',
'dont validate sequence duplicates if no sequence change',
'partial cherry pick for proteins',
'default to english for names, added resolver for internal structures in structure search',
'duplicate search no longer reports duplicate duplicates',
'using paging finder as default iterator on processes',
'added type-ahead improvements to wizard',
'updated form queries to be url-encoded',
'Added export support for pt spl choice list',
'Hide modifications for concepts',
'hide approval button when already approved, or not a candidate for approval',
'Changed duplicate check to be more flex-like',
'use internal JSON for PojoDiff, fixes exact match problem on changing structure',
'Added comments field to relationship form',
'allow tasks to be scheduled via initiators, added to the conf file',
'added improvements to scheduler, REST api for scheduler',
'refactoring processor for reindex',
'basics for scheduler, added size',
'abstracting out reindexing to be generic',
'allow exports to be deleted and cancelled',
'warn on duplicates',
'improved UI for myDownloads, added ajax monitor',
'download export dropdown only visible if logged in',
'Allow history views to see old rendered structures on chemicals',
'now lookups are closed before they are cleared. This might fix file handle problem on windows',
'Added new field names for facet fields',
'use global hostname for SearchResultContext, dont standardize the substructure queries',
'improved performance for api substance search',
'Add jsdraw extensions for isotopes',
'Added workaround for chemicals with 0 atoms in SGROUP',
'changed approval procedure to use mutating transaction',
'the file to load at deployment time is now configurable use enviornment variable',
'suggest fields now rank exact match as first hit',
'changed Indexable to allow providing full path instead of just name.',
'added codesystem validation rule',
'added support for including private commonData in spreadsheet exporter.',
'added name duplicate check in validation.'


        ]

                }

                ]
            },
            {
                date: 'January 11, 2017',
                version: '1.3.0_beta',
                filebundled: './releases/gsrs1_3_0_beta_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrs1_3_0_beta_empty_h2.zip',
                changelog: [{
                    type: 'bug fix',
                    details: [
                        'Error message when trying to view a substance that I approved',
                        'SSG1 Submission failed without any error. Added validation for SSG1',
                        'Could not edit or submit a polymer record',
                        'Last Edited By facets are wrong / sometimes break',
                        'Updates to CV now allowed.',
                        'Updating a record would cause substructure search to fail for related records.',
                        'Sorting and some other features failed when showing deprecated records . Defaulting to always using lucene, even for deprecated records.',
                        'Hover-over on structure search now shows structure again.',
                        'Residue lookup on edit would show all residues as invalid until one change happened.',
                        'Making no change to a record, but saving it would add an entry to the history table, but do nothing else. ',
                        'Cancelling the persistence of an inverted relationship would persist an Edit for that attempted change, even though none was performed, due to a misreporting by the trigger.',
                        'Don\'t fail text indexing on empty strings. We now allow empty strings to be ignored from indexing or to add them with a special "EMPTY" keyword.',
                        'Added validation rule to proteins, not to allow records with no ubunits',
                        'Deadlock could occur in load if, during an update, a  database timeout or other fetching error occurred. This is now fixed.',
                        'Attempting to add audit information from a load, which referred to users who don\'t exist in they system could cause very few records to persist previously.',
                        'Allow admin to see edit / update pieces, as intended.',
                        'Non-authenticated redirect now redirects, even if the root application path is changed.'
                    ]
                }, {
                    type: 'improvement',
                    details: [
                        'REST API now supports PATCH and PUT operations for granular changes (needed for form and webservice improvements).',
        'Structure search now available via REST API (needed for ajaxing advanced searches)',
        'REST API can now explore facet values granularly, allowing for finding rare facet values (needed for expanding the facet values on browse/search).',
        'REST API now shows simplified data by default for many collections.',
        'REST API now allows selecting specific sub elements and some basic processing functions.',
        'REST API supports asynchronous calls',
        'REST API allows for new configurable function calls',
        'Simplified authentication, to allow more flexibility / extensibility.  Improvements to codebase which reduce redundancy, improve performance.',
        'Added suffix searching support now *foo and *foo* are supported',
        'Substance reference search now does exact name by default, with type-ahead.',
         'Only allow Super-users to override duplicate warnings',
        'Allow incomplete proteins to have 0 subunits',
        'Allow for indexing outside of the model, for adding  new facets / sorters / suggest fields without having to modify the entity models directly.',
        'Allow configuration of what facets show on UI without need to recompile.',
        'Allow admins to show deprecated records with a checkbox',
        'Searches which match an exact field that\'s flagged as special come up first, before everything else.',
        'Include runTests scripts for windows / unix',
         'UI improvements : Show history and change reason on record view, Improved facet overflow handling, Moved Audit information to top of record, collapsed by default, Can sort on browse / search, Added new facets - Record Level Access,  Display Name Level Access, Definiton Level Access'


        ]

                }

                ]
            }, {
                date: 'September 9, 2016',
                version: '1.2.06-beta',
                filebundled: './releases/gsrsv1_2_06_beta_bundled_h2_smallseed.zip',
                fileempty: './releases/gsrsv1_2_06_beta_empty_h2.zip',
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
                deprecated : true,
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
                deprecated : true,
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
                deprecated : true,
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
